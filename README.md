# HacktivPress
A simple blog aplication with Express.js, MongoDB and Vue.js

## Setup
1. Install server dependencies
```bash
  cd server
  npm install
```

2. Run MongoDB  service
```bash
  sudo service mongod start
```

3. Run Express
```bash
  npm start
```

4. Install client dependencies
```bash
  cd client
  npm install
```
5. Run Vue Dev Server
```bash
  npm run dev
```

## API Routes
### Users
| Route | Method | Usage | Result |
| :--- | :---: | :--- | :--- |
| /api/signup | POST | Send url-encoded-form with username, email, password as attributes | Created user |
|/api/signin | POST | Send url-encoded-form with username and password | Token with user data (id and username) |

### Articles
| Route | Method | Usage | Result |
| :--- | :---: | :--- | :--- |
| /api/articles | POST | Insert user token to header with token attribute, and url-encoded-form with title, content and category | Created articles |
| /api/articles | GET | Just send request | All articles created |
| /api/articles/:id | GET | Replace :id with article id | Get one article |
| /api/articles/:id | PUT | Replace :id with article id, and url-encoded-form with title, content and category | Updated article |
| /api/articles/:id | DELETE | Replace :id with article id | Affected article |
