from flask import Flask, render_template


app = Flask(__name__, template_folder="./build", static_folder="./build/static")

@app.route('/', methods=["GET"])
def home():
    return render_template('index.html')

if __name__ =="__main":
    app.run('0.0.0.0', port=5001)