import { v4 as uuidv4 } from "uuid";

interface IType {
  id: string; // Add ID field to IType interface
  typeName: string;
  color: string;
}
/********************************************************** */
//*****************FUNCTION to addTodo Task**************** */
//function to create a new Type
export const addTypeFunction = (
  types: IType[] | undefined,
  typeName: string,
  color: string
): IType[] => {
  // Specify the return type as IType[]
  if (!types) {
    types = [];
  }

  if (!types.some((t) => t.typeName === typeName)) {
    const newType: IType = {
      id: uuidv4(),
      typeName: typeName,
      color: color,
    };
    const newTypes = [...types, newType];
    localStorage.setItem("typesLocal", JSON.stringify([...types, newType]));
    return newTypes; // Return the updated types array
  }

  return types; // Return the original types array if the type already exists
};
