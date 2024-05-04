from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def homepage():
    return render_template('main.html')

@app.route('/p_unicornios')
def p_unicornios():
    return render_template('p_unicornios.html')

@app.route('/p_fin')
def p_fin():
    return render_template('p_fin.html')

@app.route('/p_educacao')
def p_educacao():
    return render_template('p_educacao.html')

@app.route('/p_games')
def p_games():
    #return render_template('usuarios.html', nome_usuario=nome_usuario)
    return render_template('p_games.html')

@app.route('/p_rh')
def p_rh():
    return render_template('p_rh.html')

if __name__ == '__main__':
    app.run(debug=True)