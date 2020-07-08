const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const UserModel = require('../models').User;
const JWTstrategy = require('passport-jwt').Strategy;
//We use this to extract the JWT sent by the user
const ExtractJWT = require('passport-jwt').ExtractJwt;

passport.use('login', new LocalStrategy({
    usernameField : 'username',
    passwordField : 'password'
  }, async (username, password, done) => {
    try {
      //Find the user associated with the email provided by the user
      console.info('chegou aqui');
      const user = await UserModel.findOne({
        where: {username: username}
      });
      if( !user ){
        //If the user isn't found in the database, return a message
        return done(null, false, { message : 'Usuário não encontrado'});
      }
      //Validate password and make sure it matches with the corresponding hash stored in the database
      //If the passwords match, it returns a value of true.
      const validate = UserModel.isValidPassword(user, password);
      if( !validate ){
        return done(null, false, { message : 'Senha não confere'});
      }
      //Send the user information to the next middleware
      return done(null, user, { message : 'Loggin efetuado com sucesso'});
    } catch (error) {
      return done(error);
    }
}));

  //This verifies that the token sent by the user is valid
passport.use(new JWTstrategy({
    //secret we used to sign our JWT
    secretOrKey : 'top_secret',
    //we expect the user to send the token as a query parameter with the name 'secret_token'
    jwtFromRequest : ExtractJWT.fromHeader('secret_token')
//    jwtFromRequest : ExtractJWT.fromUrlQueryParameter('secret_token')
  }, async (token, done) => {
    try {
      //Pass the user details to the next middleware
      return done(null, token.user);
    } catch (error) {
      done(error);
    }
  }));