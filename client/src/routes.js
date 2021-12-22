import React from 'react'
import { Routes, Route, Redirect } from 'react-router-dom'
import { AuthPage } from './pages/AuthPage'
import { BookInfoPage } from './pages/BookInfoPage'
import { DocumentViewPage } from './pages/DocumentViewPage'
import { DocumentsPage } from './pages/DocumentsPage'
import { FindPage } from './pages/FindPage'
import { ForumListPage } from './pages/ForumListPage'
import { ForumMessagePage } from './pages/ForumMessagePage'
import { MainPage } from './pages/MainPage'
import { NewsPage } from './pages/NewsPage'
import { NewsInfoPage } from './pages/NewsInfoPage'
import { RegisPage } from './pages/RegisPage'
import ProfilePage from './views/ProfilePage/ProfilePage'
/*import {  } from './src/pages'
import {  } from './src/pages'
import {  } from './src/pages'
import {  } from './src/pages'*/

export const useRoutes = () =>  {
    return (
        <Routes>
            <Route path = "/auth" element = {<AuthPage />} />

            <Route path = "/bookinfo" element = {<BookInfoPage />} />

            <Route path = "/documentview" 
                element = {<DocumentViewPage />}
            />
            <Route path = "/documents" 
              element =  { <DocumentsPage />}
            />
            <Route path = "/find"  element =  
               { <FindPage />}
            />
            <Route path = "/forumlist"  element =  
                {<ForumListPage />}
            />
            <Route path = "/forummessage"  element =  
                {<ForumMessagePage />}
            />
            <Route path = "/main"  element =  
                {<MainPage />}
            />
            <Route path = "/news"  element =  
               { <NewsPage />}
            />
            <Route path = "/newsinfo"  element =  
                {<NewsInfoPage />}
            />
            <Route path = "/regis"  element =  
                {<RegisPage /> }
            /> 
            <Route path = "/profile-page"  element =  
                {<ProfilePage /> }
            /> 
            <Route path = "/"  element =  
                {<MainPage /> }
            /> 

        </Routes>
    )
}
