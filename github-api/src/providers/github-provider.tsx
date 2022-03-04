import React, { createContext, SetStateAction, useCallback, useState } from 'react';
import api from '../services/api'

type RepositoryType = []

type TypeData = {
  hasUser?: boolean,
  loading: boolean,
    user: {
      avatar?:string,
      name?:string,
      html_url?:string,
      login?:string,
      company?:string,
      location?:string,
      blog?:string,
      followers?:number,
      following?:number,
      public_gists?:number,
      public_repos?:number
    },
    repositories: {id:number,name: string, full_name:string}[],
    starred: {id:number,name: string, full_name:string, html_url:string}[],
}
type TypeContext ={
  githubState:TypeData,
  getUser:(username:string)=>void,
  getUserRepos:(username:string)=>void,
  getUserStarred:(username:string)=>void
}
export const GithubContext = createContext<TypeContext>({
    githubState:{loading: false,
      user: {avatar:''},
      repositories: [],
      starred: []},
      getUser:()=>'',
      getUserRepos:()=>'',
    getUserStarred:()=>''
  });

const GithubProvider:React.FC = ({children}) => {


    const [githubState, setGithubState] = useState({
        hasUser: false,
        loading: false,
        user: {
          id: undefined,
          avatar: undefined,
          login: undefined,
          name: undefined,
          html_url: undefined,
          blog: undefined,
          company: undefined,
          location: undefined,
          followers: 0,
          following: 0,
          public_gists: 0,
          public_repos: 0,
        },
        repositories: [],
        starred: [],
      });
    
      const getUser = (username: string) => {
        setGithubState((prevState) => ({
          ...prevState,
          loading: !prevState.loading,
        }));
    
        api
          .get(`users/${username}`)
          .then(({ data }) => {
            setGithubState((prevState) => ({
              ...prevState,
              hasUser: true,
              user: {
                id: data.id,
                avatar: data.avatar_url,
                login: data.login,
                name: data.name,
                html_url: data.html_url,
                blog: data.blog,
                company: data.company,
                location: data.location,
                followers: data.followers,
                following: data.following,
                public_gists: data.public_gists,
                public_repos: data.public_repos,
              },
            }));
          })
          .finally(() => {
            setGithubState((prevState) => ({
              ...prevState,
              loading: !prevState.loading,
            }));
          });
      };
    
      const getUserRepos = (username:string) => {
        api.get(`users/${username}/repos`).then(({ data }) => {
          console.log("data: " + JSON.stringify(data));
          setGithubState((prevState) => ({
            ...prevState,
            repositories: data,
          }));
        });
      };
    
      const getUserStarred = (username: string) => {
        api.get(`users/${username}/starred`).then(({ data }) => {
          console.log("data: " + JSON.stringify(data));
          setGithubState((prevState) => ({
            ...prevState,
            starred: data,
          }));
        });
      };
    const contextValue: TypeContext= {
        githubState,
        getUser: useCallback((username:string) => getUser(username), []),
        getUserRepos: useCallback((username:string) => getUserRepos(username), []),
        getUserStarred: useCallback((username:string) => getUserStarred(username), []),
      };
    return (
        <GithubContext.Provider value={contextValue}>
            {children}  
        </GithubContext.Provider>
    );
};

export default GithubProvider