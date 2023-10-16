const fs = require('fs')
const readline = require('readline')

class Editor {
  constructor() {
    this.lines = []
    this.observers = []
  }

  addObserver(observer) {
    this.observers.push(observer)
  }

  removeObserver(observer) {
    const index = this.observers.indexOf(observer)
    if (index !== -1) {
      this.observers.splice(index, 1)
    }
  }

  notify(event) {
    this.observers.forEach(observer => observer.update(event))
  }
}

class TextEditor extends Editor {
  insertLine(lineNumber, text) {
    this.lines.splice(lineNumber, 0, text)
    this.notify({ type: 'insert', lineNumber, text })
  }

  saveToFile(filename) {
    const content = this.lines.join('\n')
    fs.writeFileSync(filename, content)
    console.log(`Conteúdo salvo no arquivo "${filename}"`)
  }
}

class TextFileSaver {
  constructor(editor) {
    this.editor = editor
    this.editor.addObserver(this)
  }

  update(event) {
    if (event.type === 'insert') {
      console.log(`Linha ${event.lineNumber} inserida: ${event.text}`)
    }
  }
}

const textEditor = new TextEditor()
const textFileSaver = new TextFileSaver(textEditor)

console.log("Editor de Texto - Digite suas linhas e digite 'EOF' para salvar:")

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.on('line', (input) => {
  if (input === 'EOF') {
    rl.question("Digite o nome do arquivo para salvar: ", (filename) => {
      textEditor.saveToFile(filename)
      rl.close()
    })
  } else {
    textEditor.insertLine(textEditor.lines.length, input)
  }
})
