import { useContext, useEffect } from "react";
import { AppContext } from "../../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { auth, db } from "../../../config/firebase";
import {
  collection,
  deleteDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";

interface IType {
  type: {
    id: string; // Add ID field to IType interface
    user: string;
    typeName: string;
    color: string;
    icon: string;
    isEditing: boolean;
  };
}

export const DeleteTypeItemButton = (props: IType) => {
  const { type } = props;

  const {
    allColors,
    allTodos,
    allTypes,
    setAllTypes = () => {},
    isLoggedIn,
  } = useContext(AppContext) || {}; // Destructure allColors from the context

  //START EDIT THE TODO

  //function to delete a Type
  const deleteType = async (type: string, id: string) => {
    //check if the type is being used
    if (allTodos && allTodos.some((t) => t.nType === id)) {
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

  const handleEditClick = () => {
    deleteType?.(type.typeName, type.id);
  };

  //UPDATE LocalStorage when allTypes changes
  useEffect(() => {
    if (!isLoggedIn) {
      // Update localStorage whenever allTypes changes
      localStorage.setItem("typesLocal", JSON.stringify(allTypes));
    }
  }, [allTypes]);

  return (
    <FontAwesomeIcon
      icon={faTrash}
      onClick={handleEditClick}
      style={{ color: allColors?.buttonIcons }}
    />
  );
};
