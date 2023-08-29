import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
    { field: "id", headerName: "ID", width: 10 },
    {
        field: "firstName",
        headerName: "Nombre",
        width: 100,
        editable: true,
    },
    {
        field: "lastName",
        headerName: "Apellido",
        width: 150,
        editable: true,
    },
    {
        field: "email",
        headerName: "Correo Electrónico",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        width: 160,
        valueGetter: (params) => `${params.row.firstName + "@gmail.com"}`,
    },
    {
        field: "stack",
        headerName: "Stack",
        width: 110,
        editable: true,
    },
    {
        field: "genre",
        headerName: "Género",
        width: 110,
        editable: true,
        type: "singleSelect",
        valueOptions: ["Fem", "Male"],
    },
    {
        field: "registerDate",
        headerName: "Fecha Registro",
        width: 110,
        editable: true,
        type: "date",
    },
];

const rows = [
    {
        id: 1,
        lastName: "Snow",
        firstName: "Jon",
        stack: "front",
        genre: "male",
        registerDate: new Date(2020, 8, 12),
    },
    {
        id: 2,
        lastName: "Snow2",
        firstName: "Jon2",
        stack: "front2",
        genre: "male2",
        registerDate: "19/02/2022",
    },
    {
        id: 2,
        lastName: "Snow2",
        firstName: "Jon2",
        stack: "front2",
        genre: "male2",
        registerDate: "19/02/2022",
    },
    {
        id: 2,
        lastName: "Snow2",
        firstName: "Jon2",
        stack: "front2",
        genre: "male2",
        registerDate: "19/02/2022",
    },
    {
        id: 2,
        lastName: "Snow2",
        firstName: "Jon2",
        stack: "front2",
        genre: "male2",
        registerDate: "19/02/2022",
    },
    {
        id: 2,
        lastName: "Snow2",
        firstName: "Jon2",
        stack: "front2",
        genre: "male2",
        registerDate: "19/02/2022",
    },
    {
        id: 2,
        lastName: "Snow2",
        firstName: "Jon2",
        stack: "front2",
        genre: "male2",
        registerDate: "19/02/2022",
    },
    {
        id: 2,
        lastName: "Snow2",
        firstName: "Jon2",
        stack: "front2",
        genre: "male2",
        registerDate: "19/02/2022",
    },
    {
        id: 2,
        lastName: "Snow2",
        firstName: "Jon2",
        stack: "front2",
        genre: "male2",
        registerDate: "19/02/2022",
    },
    {
        id: 2,
        lastName: "Snow2",
        firstName: "Jon2",
        stack: "front2",
        genre: "male2",
        registerDate: "19/02/2022",
    },
    {
        id: 2,
        lastName: "Snow2",
        firstName: "Jon2",
        stack: "front2",
        genre: "male2",
        registerDate: "19/02/2022",
    },
    {
        id: 2,
        lastName: "Snow2",
        firstName: "Jon2",
        stack: "front2",
        genre: "male2",
        registerDate: "19/02/2022",
    },
];

export default function MuiGrid() {
    return (
        <Box sx={{ height: 400, width: "100%" }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 2,
                        },
                    },
                }}
                pageSizeOptions={[5]}
                //checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>
    );
}
