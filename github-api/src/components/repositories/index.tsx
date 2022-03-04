import React from 'react';
import * as S from "./styled";
import useGithub from "../../hooks/github-hooks";
import RepositoryItem from "../repository-item";
const Repositories: React.FC = () => {
    const { githubState, getUserRepos, getUserStarred } = useGithub();
    const [hasUserForSearchrepos, setHasUserForSearchrepos] = React.useState<{}[]>([]);
    const [hasUserForSearchtarred, setHasUserForSearchStarred] = React.useState<{}[]>([]);

    React.useEffect(() => {
        if (githubState.user.login) {
          getUserRepos(githubState.user.login);
          getUserStarred(githubState.user.login);
        }
        setHasUserForSearchrepos(githubState.repositories);
        setHasUserForSearchStarred(githubState.starred)
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [githubState.user.login]);

    return (
        <>
        {hasUserForSearchrepos ? (
        <S.WrapperTabs
        selectedTabClassName="is-selected"
        selectedTabPanelClassName="is-selected"
        >
            <S.WrapperTabList>
                <S.WrapperTab>Repositories</S.WrapperTab>
                <S.WrapperTab>Starred</S.WrapperTab>
            </S.WrapperTabList>
            
            <S.WrapperTabPanel>
                <S.WrapperList>
                {githubState.repositories.map((item) => (
                <RepositoryItem
                  key={item.id}
                  name={item.name}
                  linkToRepo={item.full_name}
                  fullName={item.full_name}
                />
              ))}
                </S.WrapperList>
            </S.WrapperTabPanel>
            <S.WrapperTabPanel>
                <S.WrapperList>
                {githubState.starred.map((item) => (
                <RepositoryItem
                  key={item.id}
                  name={item.name}
                  linkToRepo={item.html_url}
                  fullName={item.full_name}
                />
              ))}
                </S.WrapperList>
            </S.WrapperTabPanel>
        </S.WrapperTabs>
        ) : (
            <></>
          )}
        </>
    );

};

export default Repositories