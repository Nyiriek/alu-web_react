import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud";


const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
};

const newRowID: RowID = CRUD.insertRow(row);

const UpdatedRow: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
    age: 23,
};

CRUD.updateRow(newRowID, UpdatedRow);
CRUD.deleteRow(newRowID);