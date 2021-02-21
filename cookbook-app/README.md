Install guide for Windows:
  1. install node
  2. install yarn
  3. install python
  4. Run these commands in powershell
      - npx create-react-app cookbook-app
      - cd cookbook-app
      - mkdir api
      - cd api
      - python -m venv venv (or py -m venv venv)
      - ./venv/Scripts/activate
      - pip install flask python-dotenv
      - pip install pymongo
      - pip install flask-cors
      - pip install dnspython
  
How to run on Windows:
  1. Open a terminal
      - run this command: yarn start-api
  2. Open a second terminal
      - run these commands: ./venv/Scripts/activate
                             yarn start
                             
                      
  
