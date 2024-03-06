import React, { useEffect, useMemo, useState } from "react";
import { Badge, Button } from 'flowbite-react';
import AxiosClient from '../../../config/http-gateway/http-client';
import TableComponent from '../../../components/TableComponent';
import { LiaTrashSolid, LiaEdit, LiaTrashRestoreSolid } from "react-icons/lia";
import { FaSearch } from "react-icons/fa";
import { Card } from 'flowbite-react';
import { Label } from 'flowbite-react';
import { TextInput } from 'flowbite-react';

const UserPage = () => {
    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [filterText, setFilterText] = useState('');

    const columns = useMemo(() => [
        {
            name: "#",
            cell: (row, index) => <>{index + 1}</>,
            sortable: true,
            selector: (row, index) => index + 1,
        },
        {
            name: "Usuario",
            cell: (row) => <>{row.username}</>,
            sortable: true,
            selector: (row) => row.username,
        },
        {
            name: "Rol",
            cell: (row, index) => <>{row.roles[0].name}</>,
            sortable: true,
            selector: (row, index) => row.roles[0].name,
        },
        {
            name: "Estado",
            cell: (row) =>
                <Badge color={row.status ? 'success' : 'failure'}>
                    {row.status ? 'ACTIVO' : 'INACTIVO'}
                </Badge>,
            sortable: true,
            selector: (row) => row.status,
        },
        {
            name: "Acciones",
            cell: (row) => (
                <div className="flex gap-2 p-2">
                    <Button outline pill color='warning' size={'sm'}>
                        <LiaEdit />
                    </Button>
                    <Button outline color={row.status ? 'failure' : 'success'} pill size={'sm'}>
                        {row.status ? <LiaTrashSolid /> : <LiaTrashRestoreSolid />}
                    </Button>
                </div>
            )

        }
    ]);

    const getUsers = async () => {
        try {
            setLoading(true);
            const response = await AxiosClient({
                url: "/user/",
                method: "GET",
            });
            console.log(response);
            if (!response.error) setUsers(response.data);
        } catch (error) {

        } finally {
            setLoading(false)
        }
    }

    const filter = () => {
        return users.filter(users => users.username.includes(filterText));
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <>
            <section className="flex flex-col pt-4 px-3">
                <div>
                    <h4 className='text-2x1'>Usuarios</h4>
                </div>
                <div className='flex w-full justify-between'>
                    <div className="max-w-md">
                        <Label htmlFor="search" value="Buscar" />
                        <TextInput id="search" type="text"
                            rightIcon={FaSearch}
                            placeholder="Buscar..."
                            onChange={(e) => setFilterText(e.target.value)}
                            value={filterText} />
                    </div>
                    <div>
                        <Button pill outline color='success' onClick={UserPage}>AGREGAR</Button>
                    </div>
                </div>
                <Card>
                    <TableComponent
                        columns={columns}
                        data={filter()} 
                        progress={loading} />
                </Card>
            </section>
        </>
       
    )
}

export default UserPage;