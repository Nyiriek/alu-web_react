import { RowID, RowElement } from "./interface";

declare module './crud' {
    export function insertRow(row: RowElement): RowID;
    export function deleteRow(rowId: RowID): void;
    export function selectRow(rowId: RowID, row: RowElement); RowID;   


    export function updateRow(newRowID: number, UpdatedRow: RowElement) {
        throw new Error("Function not implemented.");
    }
}