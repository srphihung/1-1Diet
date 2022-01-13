import { MouseEventHandler, useCallback, useState } from "react";
import WM from "../Data/WM.json";

type WM = typeof WM;

type SortKeys = keyof WM[0];

type SortOrder = "ascn" | "desc";

function sortWM({
                      tableWM,
                      sortKey,
                      reverse,
                  }: {
    tableWM: WM;
    sortKey: SortKeys;
    reverse: boolean;
}) {
    if (!sortKey) return tableWM;

    const sortedWM = WM.sort((a, b) => {
        return a[sortKey] > b[sortKey] ? 1 : -1;
    });

    if (reverse) {
        return sortedWM.reverse();
    }

    return sortedWM;
}

function SortButton({
                        sortOrder,
                        columnKey,
                        sortKey,
                        onClick,
                    }: {
    sortOrder: SortOrder;
    columnKey: SortKeys;
    sortKey: SortKeys;
    onClick: MouseEventHandler<HTMLButtonElement>;
}) {
    return (
        <button
            onClick={onClick}
            className={`${
                sortKey === columnKey && sortOrder === "desc"
                    ? "sort-button sort-reverse"
                    : "sort-button"
            }`}
        >
            ▲
        </button>
    );
}

function SortableTable({ WM }: { WM: WM }) {
    const [sortKey, setSortKey] = useState<SortKeys>("id");
    const [sortOrder, setSortOrder] = useState<SortOrder>("ascn");

    const headers: { key: SortKeys; label: string }[] = [
        { key: "id", label: "ID" },
        { key: "date", label: "Datum" },
        { key: "weight", label: "Gewicht" },
        { key: "difference", label: "Verschil" },
        { key: "cumulative", label: "Cumulatief" },
        { key: "waist", label: "taille" },
        { key: "BMI", label: "BMI" },
        { key: "moist", label: "vocht" },
        { key: "fat", label: "vet" },
        { key: "fatFree", label: "vet vrij" },
        { key: "muscularMass", label: "spieren" },
        { key: "bones", label: "botten" },
    ];

    const sortedWM = useCallback(
        () => sortWM({ tableWM: WM, sortKey, reverse: sortOrder === "desc" }),
        [WM, sortKey, sortOrder]
    );

    function changeSort(key: SortKeys) {
        setSortOrder(sortOrder === "ascn" ? "desc" : "ascn");

        setSortKey(key);
    }

    return (
        <table>
            <thead>
            <tr>
                {headers.map((row) => {
                    return (
                        <td key={row.key}>
                            {row.label}{" "}
                            <SortButton
                                columnKey={row.key}
                                onClick={() => changeSort(row.key)}
                                {...{
                                    sortOrder,
                                    sortKey,
                                }}
                            />
                        </td>
                    );
                })}
            </tr>
            </thead>

            <tbody>
            {sortedWM().map((person) => {
                return (
                    <tr key={person.id}>
                        <td>{person.id}</td>
                        <td>{person.date}</td>
                        <td>{person.weight}</td>
                        <td>{person.difference}</td>
                        <td>{person.cumulative}</td>
                        <td>{person.waist}</td>
                        <td>{person.BMI}</td>
                        <td>{person.moist}</td>
                        <td>{person.fat}</td>
                        <td>{person.fatFree}</td>
                        <td>{person.muscularMass}</td>
                        <td>{person.bones}</td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
}

export default SortableTable;