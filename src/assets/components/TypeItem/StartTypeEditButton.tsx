import { useContext, useEffect } from "react";
import { AppContext } from "../../../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { auth, db } from "../../../config/firebase";
import {
  collection,
  updateDoc,
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

export const StartTypeEditButton = (props: IType) => {
  const { type } = props;

  const {
    allColors,
    allTodos,
    allTypes,
    setAllTypes = () => {},
    isLoggedIn,
  } = useContext(AppContext) || {}; // Destructure allColors from the context

  //START EDIT THE TODO
  // Function to change the editing status of a TODO
  //function to change isEditing on type
  const startEditing = async (id: string) => {
    //filter the type to be edited
    const updatedTypes =
      allTypes?.map((t) =>
        t.id === id ? { ...t, isEditing: !t.isEditing } : t
      ) || [];
    //set the types array to the updated array
    setAllTypes(updatedTypes);

    if (isLoggedIn) {
      try {
        console.log("changing isEditing on TYPE from Firebase");

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
          await updateDoc(doc.ref, { isEditing: !doc.data().isEditing });
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleEditClick = () => {
    startEditing?.(type.id);
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
      icon={faEdit}
      onClick={handleEditClick}
      style={{ color: allColors?.buttonIcons }}
    />
  );
};
