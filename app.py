from flask import Flask, render_template

app = Flask(__name__)

# Route for Home page
@app.route('/')
def home():
    return render_template('home.html')

# Route for About Us page
@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/team')
def team():
    return render_template('team.html')

# Route for Events page
@app.route('/events')
def events():
    return render_template('events.html')

# Route for Societies page
@app.route('/societies')
def societies():
    return render_template('societies.html')

# Route for Membership page
@app.route('/membership')
def membership():
    return render_template('membership.html')

# Route for Articles page
@app.route('/articles')
def articles():
    return render_template('articles.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0',debug=True)
