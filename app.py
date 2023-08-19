from flask import Flask, request
import flask
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/")
def index():
    return "Hello, World!"


@app.route("/users", methods=["GET", "POST"])
def users():
    print("users endpoint reached...")
    if request.method == "GET":
        with open("users.json", "r+") as f:
            data = json.load(f)
            return flask.jsonify(data)
    if request.method == "POST":
        received_data = request.get_json()
        print(f"received data: {received_data}")
        number = received_data['data']
        multiplied = int(number) * 2
        return_data = f"your number multiplied by 2 is equal to: {multiplied}"
        return flask.Response(response=json.dumps(return_data), status=201)


if __name__ == "__main__":
    app.run("localhost", 6969)
