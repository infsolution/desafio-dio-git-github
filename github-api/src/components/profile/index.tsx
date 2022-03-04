import React from 'react';
import * as S from './styled'
import useGithub from "../../hooks/github-hooks";
const Profile: React.FC = () => {
    const { githubState } = useGithub();
    return (
        <S.Container>
            <S.Image src={githubState.user.avatar} alt="Avatar of user"/>
            <S.InfoUser>
                <div>
                    <h1>{githubState.user.name}</h1>
                <S.UserGeneric>
                <h3>Username:</h3>
                    <a
                    href={githubState.user.html_url}
                    target="_blank"
                    rel="noreferrer"
                    >
                    {githubState.user.login}
                    </a>
                </S.UserGeneric>
                <S.UserGeneric>
                    <h3>Company:</h3>
                    <span>{githubState.user.company}</span>
                </S.UserGeneric>
                <S.UserGeneric>
                    <h3>Location:</h3>
                    <span>{githubState.user.location}</span>
                </S.UserGeneric>
                <S.UserGeneric>
                    <h3>Blog:</h3>
                    <a href={githubState.user.blog} target="_blank" rel="noreferrer">
                    {githubState.user.blog}
                    </a>
                </S.UserGeneric>
                <S.StatusCount>
                <div>
                    <h4>Followers</h4>
                    <span> {githubState.user.followers}</span>
                </div>
                <div>
                    <h4>Followings</h4>
                    <span> {githubState.user.following}</span>
                </div>
                <div>
                    <h4>Gists</h4>
                    <span> {githubState.user.public_gists}</span>
                </div>
                <div>
                    <h4>Repos</h4>
                    <span> {githubState.user.public_repos}</span>
                </div>
                </S.StatusCount>
                </div>
            </S.InfoUser>
        </S.Container>
    );
};

export default Profile