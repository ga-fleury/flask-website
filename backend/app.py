from flask import Flask, request, jsonify
import flask
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/api/home", methods=["GET"])
def return_home():
    return jsonify({
        'message': 'hello you!'
    })

@app.route("/api/multiply", methods=["GET", "POST"])
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
        return_data = f"{multiplied}"
        return flask.Response(response=json.dumps(return_data), status=201)


if __name__ == "__main__":
    app.run("localhost", 6969)
