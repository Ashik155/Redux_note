<h1> Redux Notes  </h1>


<h2> What is redux :? </h2>

It is basically a state managment library. By using Redux we can easilt handle the state in our React app or  Project. 

<h2> Let's See what is Redux Cycle Describe us </h2>
1.  Action Creator :-> 
2.  Action
3.  Dispatch
4.  Reducers
5.  State

Action Creator : 
    Is a function that
    returns JS plain object. 
    Creates action

Action : 
    Plain Js Object Has :
    type and payLoad property,
    Describes the change end usern want to make. 

Dispatch 
    will copy That plain JS object and pass it to reducers in our app.

Reducers :
    A function that,
    consider the action, 
    according to action processing the data and 
    manages the data, 

State :
    common Repository of Data, 
    React app get access to this repo and use or handles this data



<h3> Always try to make sure that when you make changes in the data of repos then you should return new array from the reducer not the modifies array from the reducer <h3>

<h2>
 About Redux Libraries
</h2>

 createStore -> for crearinng a store from available reducers in our app and returns store ( central )
 combineReducers -> for combing all the reducers in one place
 dispatch -> for sending the data to all reducers, it takes action as an argument 
 getState -> get us central data at a moment 


Redux Cycle :
 <img src="https://miro.medium.com/max/1400/1*TYLWP1zJSq30XJy9cyGR_g.png" />

 <h3> We are not able to manually change the state object, we need to use action, action creator and reducers to do so </h3>

 <h1> React with Redux </h1>