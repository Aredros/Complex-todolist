import { useContext, useEffect } from "react";
import { AppContext } from "../../../App";
import { auth, db } from "../../../config/firebase";
import {
  collection,
  deleteDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { IconWeekType } from "../WeekHead/IconWeekType";
import { v4 as uuidv4 } from "uuid";

export const TypeItem = () => {
  const {
    allColors,
    allTodos,
    allTypes,
    setAllTypes = () => {},
    isLoggedIn,
  } = useContext(AppContext) || {}; // Destructure allColors from the context

  //function to delete a Type
  const deleteType = async (type: string, id: string) => {
    //check if the type is being used
    if (allTodos && allTodos.some((t) => t.nType === type)) {
      //if the type is being use, alert the use
      alert("You cannot delete a type that is being used");
    } else {
      //filter the type to be deleted
      const updatedTypes = allTypes?.filter((t) => t.id !== id) || [];
      //set the types array to the updated array
      setAllTypes(updatedTypes);

      if (isLoggedIn) {
        try {
          console.log("deleting TYPE from Firebase");

          // Get the current user's email
          const userEmail = auth.currentUser?.email;

          // Create a query to fetch the specific todo based on the user and todo ID
          const q = query(
            collection(db, "categories"),
            where("user", "==", userEmail),
            where("id", "==", id)
          );

          // Get the document that matches the query
          const querySnapshot = await getDocs(q);

          // Delete the document associated with the user and todo ID
          querySnapshot.docs.forEach(async (doc) => {
            await deleteDoc(doc.ref);
          });
        } catch (err) {
          console.log(err);
        }
      }
    }
  };

  //Get all items from this type
  const CountAllItems = (typeName: string) =>
    allTodos?.filter((t) => t.nType === typeName).length || [];

  //Get all completed items from this type
  const CountCompletedItems = (typeName: string) => {
    const MoreThanZero = allTodos?.filter(
      (t) => t.nType === typeName && t.completed === true
    ).length;
    if (MoreThanZero && MoreThanZero > 0) {
      return MoreThanZero;
    } else {
      return 0;
    }
  };

  useEffect(() => {
    if (!isLoggedIn) {
      // Update localStorage whenever allTodos changes
      localStorage.setItem("typesLocal", JSON.stringify(allTypes));
    }
  }, [allTypes]);

  return (
    <>
      {allTypes?.map((type) => (
        <div
          className={`TypeItem`}
          key={`typeItem-${type.id}`}
          style={{
            backgroundColor: allColors?.formBackgroundColor,
            color: allColors?.itemText,
          }}
        >
          <IconWeekType todoType={type.typeName} key={`typeItem-${type.id}`} />
          <div className="types-nameNnumber">
            {" "}
            <p>{type.typeName}</p>
            <p className="types-nameNnumber__number">
              {`[${CountCompletedItems(type.typeName)}/${CountAllItems(
                type.typeName
              )}]`}
            </p>
          </div>

          <div>
            <FontAwesomeIcon
              key={type.id}
              icon={faTrash}
              onClick={() => deleteType(type.typeName, type.id)}
              style={{ color: allColors?.buttonIcons }}
            />
          </div>
        </div>
      ))}
    </>
  );
};
