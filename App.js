import React from 'react';
import UserCard from './UserCard';
import './App.css';

const App = () => {
  const users = [
    {
      background: 'https://i.pinimg.com/736x/93/9c/19/939c19bd9e3216e390229a4115b95e6b.jpg',
      avatar: 'https://previews.123rf.com/images/djvstock/djvstock1610/djvstock161003154/64716282-woman-female-avatar-isolated-vector-illustration-design.jpg',
      name: 'Vidhi Pankhaniya',
      jobTitle: 'HR Manager',
      social: {
        facebook: 'https://facebook.com',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
      },
      stats: {
        followers: '13.5k',
        following: '15.5k',
        posts: '7.8k',
      },
    },
    {
      background: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrTvG82MppCnF0yIrgEUM7xESNw-4wMtCjwQ&s',
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtpwe4gV2OYx9BiAF9gOcFNsP9MlSaWMGdu7LDDFurkFACMu3Fi_BrirlRTpojJT3oaHU&usqp=CAU',
      name: 'Maitry Panchal',
      jobTitle: 'Software Developer',
      social: {
        facebook: 'https://facebook.com',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
      },
      stats: {
        followers: '14.5k',
        following: '13.5k',
        posts: '4.9k',
      },
    },
    {
      background: 'https://wallpaperaccess.com/full/3274939.jpg', 
      avatar: 'https://static.vecteezy.com/system/resources/previews/005/472/268/original/the-face-of-a-cute-girl-avatar-of-a-young-girl-portrait-flat-illustration-vector.jpg',
      name: 'Vanshika Modi',
      jobTitle: 'Sales Representative',
      social: {
        facebook: 'https://facebook.com',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
      },
      stats: {
        followers: '11.9k',
        following: '12.9k',
        posts: '90k',
      },
    },
    {
      background: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV_JeEiC7LCS4vlApxCGF7shwHn0bSHxLPMKLxtoPGXGlGKlFuHBI5OuXRNBEDsIY2nZs&usqp=CAU', 
      avatar: 'https://static.vecteezy.com/system/resources/previews/005/472/263/original/the-face-of-a-cute-girl-avatar-of-a-young-girl-portrait-flat-illustration-vector.jpg',
      name: 'Srushti Eng.',
      jobTitle: 'Customer Service Associate',
      social: {
        facebook: 'https://facebook.com',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
      },
      stats: {
        followers: '10.6k',
        following: '5.6k',
        posts: '8.9k',
      },
    },
    {
      background: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTyLIq9puIocWwpxo1EEdtAUeo22R9dGjC_Q&s', 
      avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu9ZAZIl7jhyLXtJmzVGhgZx9CKG0XfGjGFg&s',
      name: 'Dhruven Gohil',
      jobTitle: 'LEegal Counsel',
      social: {
        facebook: 'https://facebook.com',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
      },
      stats: {
        followers: '10.3k',
        following: '11.2k',
        posts: '9.2k',
      },
    },
    {
      background: 'https://i.pinimg.com/564x/20/63/83/206383d10e625a8ea236d06a4cfb1a08.jpg', 
      avatar: 'https://static.vecteezy.com/ti/vecteur-libre/p3/12941847-illustrationle-de-fille-avatar-belle-femme-souriante-aux-cheveux-noirs-icone-plate-sur-fond-violet-vectoriel.jpg',
      name: 'Janki Patel',
      jobTitle: 'Software Developer',
      social: {
        facebook: 'https://facebook.com',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com',
      },
      stats: {
        followers: '8.7k',
        following: '9.7k',
        posts: '8.7k',
      },
    },
    
    
  ];

  return (
    <div className="App">
      <header className="dashboard-header">
        <h1>User Cards</h1>
        <div className="breadcrumb">
          <span>Dashboard</span>   .   <span>User</span>   .   <span>Cards</span>
        </div>
        <button className="new-user-button">+ New User</button>
      </header>
      <div className="user-cards-container">
        {users.map((user, index) => (
          <UserCard key={index} user={user} />
        ))}
      </div>
    </div>
  );
};

export default App;