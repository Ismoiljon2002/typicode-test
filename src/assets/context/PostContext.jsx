import React, { createContext, useState, useEffect } from 'react';

export const PostContext = createContext();

export const PostContextProvider = ({ children }) => {

    const [posts, setPosts] = useState([]);

    const [showSidebar, setShowSidebar] = useState(false);

    return <PostContext.Provider value={{ posts, setPosts, showSidebar, setShowSidebar }} >
        {children}
    </PostContext.Provider>
}