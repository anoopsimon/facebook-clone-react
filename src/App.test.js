

import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the app without errors', () => {
  render(<App />);
});

test('displays the header text', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/Facebook/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders posts', () => {
  const { getAllByTestId } = render(<App />);
  const postElements = getAllByTestId('post');
  expect(postElements.length).toBeGreaterThan(0);
});

test('displays post text', () => {
  const { getAllByTestId } = render(<App />);
  const postTextElements = getAllByTestId('post-text');
  expect(postTextElements.length).toBeGreaterThan(0);
});

test('displays post images', () => {
  const { getAllByTestId } = render(<App />);
  const postImageElements = getAllByTestId('post-image');
  expect(postImageElements.length).toBeGreaterThan(0);
});

test('displays like count', () => {
  const { getAllByTestId } = render(<App />);
  const likeElements = getAllByTestId('like-count');
  expect(likeElements.length).toBeGreaterThan(0);
});

test('displays comment count', () => {
  const { getAllByTestId } = render(<App />);
  const commentElements = getAllByTestId('comment-count');
  expect(commentElements.length).toBeGreaterThan(0);
});

test('renders comments for each post', () => {
  const { getAllByTestId } = render(<App />);
  const commentElements = getAllByTestId('comment');
  expect(commentElements.length).toBeGreaterThan(0);
});

test('displays comment text', () => {
  const { getAllByTestId } = render(<App />);
  const commentTextElements = getAllByTestId('comment-text');
  expect(commentTextElements.length).toBeGreaterThan(0);
});

test('displays like and comment sections', () => {
  const { getAllByTestId } = render(<App />);
  const likeAndCommentElements = getAllByTestId('like-and-comment-section');
  expect(likeAndCommentElements.length).toBeGreaterThan(0);
});
