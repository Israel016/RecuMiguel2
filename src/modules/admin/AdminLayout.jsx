import { Link, Outlet } from 'react-router-dom';
import { Navbar } from 'flowbite-react';
import { Sidebar } from 'flowbite-react';
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
import React from 'react';



const AdminLayout = () => {


    return (
        <>
            <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.css" rel="stylesheet" />
            <header >

                <Navbar fluid rounded className='bg-red-700' >
                    <Navbar.Brand as={Link} href="https://flowbite-react.com">
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Navbar.Link href="#" active className="text-lg"> {/* Ajusta el tamaño de la fuente con la clase "text-lg" */}
                            Home
                        </Navbar.Link>
                        <Navbar.Link as={Link} href="#" active className="text-lg">
                            About
                        </Navbar.Link>
                        <Navbar.Link href="#" active className="text-lg">
                            Services
                        </Navbar.Link>
                        <Navbar.Link href="#" active className="text-lg">
                            Pricing
                        </Navbar.Link>
                        <Navbar.Link href="#" active className="text-lg">
                            Contact
                        </Navbar.Link>
                    </Navbar.Collapse>
                </Navbar>
            </header>

            <div className='flex' >
                <aside>
                    <Sidebar  className="bg-red-700" >
                        <Sidebar.Items className="bg-red-700">
                            <div className="flex items-center justify-center p-4 bg-red-700">
                                <img
                                    src="../../../../assets/logo.png"
                                    className="h-20 sm:h-34"
                                    alt="Admin"
                                />
                            </div>

                            <Sidebar.ItemGroup className="bg-red-700">
                                <li>
                                    <Link to={"admin"} className="flex items-center justify-center rounded-lg p-2 text-base font-normal hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <HiViewBoards className='h-6 w-6 flex-shrink-0 text-white transition duration-75 hover:text-black dark:text-gray-400 dark:hover:text-white' />
                                        <span className="px-3 flex-1 whitespace-nowrap text-white hover:text-black">
                                            Inicio
                                        </span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to={"client"} className="flex items-center justify-center rounded-lg p-2 text-base font-normal hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <HiInbox className='h-6 w-6 flex-shrink-0 text-white transition duration-75 hover:text-black dark:text-gray-400 dark:hover:text-white' />
                                        <span className="px-3 flex-1 whitespace-nowrap text-white hover:text-black">
                                            Inventario
                                        </span>
                                    </Link>
                                </li>

                                <li>
                                    <Link to={"user"} className="flex items-center justify-center rounded-lg p-2 text-base font-normal hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <HiUser className='h-6 w-6 flex-shrink-0 text-white transition duration-75 hover:text-black dark:text-gray-400 dark:hover:text-white' />
                                        <span className="px-3 flex-1 whitespace-nowrap text-white hover:text-black">
                                            Usuarios
                                        </span>
                                    </Link>
                                </li>
                                <Sidebar.Item as={Link} href="admin" icon={HiChartPie}>
                                    Dashboard
                                </Sidebar.Item>
                                <Sidebar.Item as={Link} href="users" icon={HiViewBoards}>
                                    Kanban
                                </Sidebar.Item>
                                <Sidebar.Item as={Link} href="products" icon={HiInbox}>
                                    Inbox
                                </Sidebar.Item>
                                <Sidebar.Item href="#" icon={HiUser}>
                                    Users
                                </Sidebar.Item>
                                <Sidebar.Item href="#" icon={HiShoppingBag}>
                                    Products
                                </Sidebar.Item>
                                <Sidebar.Item href="#" icon={HiArrowSmRight}>
                                    Sign In
                                </Sidebar.Item>
                                <Sidebar.Item href="#" icon={HiTable}>
                                    Sign Up
                                </Sidebar.Item>
                            </Sidebar.ItemGroup>

                        </Sidebar.Items>
                    </Sidebar>

                </aside>

                <main className="w-full">
                    <section className="px-4 pt-2 pb-8">
                        <Outlet />

                    </section>
                </main>
            </div>

        </>
    );
}

export default AdminLayout;