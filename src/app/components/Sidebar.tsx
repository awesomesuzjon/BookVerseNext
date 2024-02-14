import React from 'react';

const Sidebar = () => {
    return (
        <aside className="bg-secondary-1 p-12  h-screen">
            <div className="text-black">
                <h2 className="text-2xl font-bold mb-4">Menu</h2>
                <ul>
                    <li className="mb-12 mt-6 flex ">
                        <img className="text-orange-800 mr-4" src={'/assets/homeIcon.svg'} alt=""/>
                        <span>
                            Discover
                        </span>

                    </li>
                    <li className="mb-12 flex ">
                        <img className="text-orange-800 mr-4" src={'/assets/categoryIcon.svg'} alt=""/>
                        <span>
                            Category
                        </span>

                    </li>
                    <li className="mb-12 flex ">
                        <img className="text-orange-800 mr-4" src={'/assets/libraryIcon.svg'} alt=""/>
                        <span>
                            My Library
                        </span>

                    </li>
                    <li className="mb-6 flex ">
                        <img className="text-orange-800 mr-4 " src={'/assets/favouriteIcon.svg'} alt=""/>
                        <span>
                            Favourite
                        </span>

                    </li>
                    <hr className="mb-6"/>
                    <li className="mb-12 flex ">
                        <img className="text-orange-800 mr-4" src={'/assets/helpIcon.svg'} alt=""/>
                        <span>
                            Help
                        </span>

                    </li>
                    <li className="mb-12 flex ">
                        <img className="text-orange-800 mr-4" src={'/assets/logoutIcon.svg'} alt=""/>
                        <span>
                            Log out
                        </span>

                    </li>
                </ul>

            </div>
        </aside>
    );
};

export default Sidebar;
