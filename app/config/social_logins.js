module.exports = {
  development: {
    google: {  
      client_id: "305103728078-defb5ck02vq4d27k5g8ccm6ar04lm965.apps.googleusercontent.com",
      secret: "EPGAuiy0ongQqMUCxLMigHGr",
      callbackURL: "/api/user/auth/google/callback",
      userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
    },
    facebook:{
      client_id: "3119197838207702",
      secret: "695d2b9b735c58db50b460e769a5c5c4",
      callbackURL: "/api/user/auth/facebook/callback"
    }
  },
  production: {
    google: {
      client_id: "305103728078-defb5ck02vq4d27k5g8ccm6ar04lm965.apps.googleusercontent.com",
      secret: "EPGAuiy0ongQqMUCxLMigHGr",
      callbackURL: "/api/user/auth/google/callback",
      userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
    },
    facebook: {
      client_id: "3119197838207702",
      secret: "695d2b9b735c58db50b460e769a5c5c4",
      callbackURL: "/api/user/auth/facebook/callback"
    }
  },
  staging: {
    google: {
      client_id: "305103728078-defb5ck02vq4d27k5g8ccm6ar04lm965.apps.googleusercontent.com",
      secret: "EPGAuiy0ongQqMUCxLMigHGr",
      callbackURL: "/api/user/auth/google/callback",
      userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
    },
    facebook: {
      client_id: "3119197838207702",
      secret: "695d2b9b735c58db50b460e769a5c5c4",
      callbackURL: "/api/user/auth/facebook/callback"
    }
  }
}
