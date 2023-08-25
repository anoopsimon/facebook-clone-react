import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f2f5;
  padding: 20px;
`;

const Header = styled.header`
  width: 100%;
  background-color: #1877f2;
  padding: 10px 20px;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Feed = styled.div`
  width: 100%;
  max-width: 500px;
  background-color: white;
  border-radius: 10px;
  margin-top: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Post = styled.div`
  padding: 10px;
  border-bottom: 1px solid #e5e5e5;
`;

const PostImage = styled.img`
  max-width: 100%;
`;

const PostText = styled.p`
  font-size: 1.2rem;
`;

const Comments = styled.div`
  margin-top: 10px;
`;

const Comment = styled.div`
  margin-top: 5px;
  font-size: 1rem;
  color: #666;
`;

const Likes = styled.div`
  margin-top: 10px;
  font-size: 1rem;
  color: #666;
`;

function App() {
  const [feedData, setFeedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/feed');
        const data = await response.json();
        setFeedData(data.feed);
      } catch (error) {
        console.error('Error fetching feed data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <AppContainer>
      <Header>Facebook</Header>
      <Feed>
        {feedData.map(post => (
          <Post key={post.id}>
            <PostText>{post.text}</PostText>
            {post.image && <PostImage src={post.image} alt={`Post ${post.id}`} />}
            <Likes>Likes: {post.likes}</Likes>
            <Comments>
              {post.comments.map(comment => (
                <Comment key={comment.id}>{comment.text}</Comment>
              ))}
            </Comments>
          </Post>
        ))}
      </Feed>
    </AppContainer>
  );
}

export default App;
  