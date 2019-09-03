import React, {useState} from 'react'
import { FaFacebook } from 'react-icons/fa';
import { IoIosChatboxes, IoIosMail } from 'react-icons/io';
import Head from 'next/head'
import '../css/bootstrap.min.css'
import '../css/index.css'
import { useRouter } from 'next/router'
import {Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem, Container
} from 'reactstrap'
function Headx({title, children}) {
    const [collapsed, setCollapsed] = useState(false)
    const routerx = useRouter();
    return (
        <React.Fragment>
            <Head>
                <title>{title}</title>
                {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link> */}
                <meta charSet='utf-8' />
                <meta name='viewport' content='initial-scale=1.0, width=device-width' />
            </Head>
            <Navbar color="light" light expand="xl" fixed="top">
                <Container>
                <NavbarBrand href="/">FaisalNazriAssociates.com</NavbarBrand>
                <NavbarToggler onClick={ () => setCollapsed(!collapsed)} />
                <Collapse isOpen={collapsed} navbar>
                    <Nav className="ml-auto" navbar>
                    <NavItem>
                       <NavLink href="/" className={routerx.pathname == '/services' ? 'active':''}> Our Services</NavLink>
                    </NavItem>
                    <NavItem>
                       <NavLink href="/aboutus" className={routerx.pathname == '/aboutus' ? 'active':''}> About Us</NavLink>
                    </NavItem>
                    <NavItem>
                       <NavLink href="/contact" className={routerx.pathname == '/contact' ? 'active':''}> Contact Us</NavLink>
                    </NavItem>
                    {/* <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                        Our Services
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                Accounting
                            </DropdownItem>
                            <DropdownItem>
                                Company Incorporation &amp;
                                Secreterial Services
                            </DropdownItem>
                            <DropdownItem>
                                Consultation
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                <ul>
                                    <li>Audit &amp; Assurance</li>
                                    <li>Tax &amp; SST Advisory</li>
                                    <li>Business Consultation</li>
                                    <li>Financial</li>
                                </ul>
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                Business Management
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                <ul>
                                    <li>Human Resource</li>
                                    <li>Payroll Outsourcing</li>
                                
                                </ul>
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                Advisory
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                <ul>
                                <li>Wealth Advisory</li>
                                <li>Insurance Advisory</li>
                                </ul>
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                MOF &amp; CIDB
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown> */}
                    <NavItem>
                        <NavLink href="/career"> Career</NavLink>
                    </NavItem>
                    </Nav>
                </Collapse>
                </Container>
            </Navbar>
            <div style={{background:'#fff'}}>
                {children}
            </div>
            <footer className="footerx">
                <Container>
                    <span className="text-muted">FAISAL NAZRI & ASSOCIATES</span>
                    <div className="float-right footer-brand">
                        <a href="facebook.com"><FaFacebook size={24} /></a>
                        <a href="/contactus"><IoIosChatboxes size={24} /></a>
                        <a href="mailto:business@faisalnazriassociates.com"><IoIosMail size={24} /></a>
                    </div>
                </Container>
                {/* </div> */}
            </footer>
        </React.Fragment>
    )
}

export default Headx
