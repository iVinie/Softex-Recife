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
      // Simulando a escrita do conteúdo em um arquivo (pode ser substituído pela lógica de escrita real)
      const content = this.lines.join('\n')
      console.log(`Salvando conteúdo no arquivo "${filename}":\n${content}`)
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
  
  const readline = require('readline')
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  
  rl.on('line', (input) => {
    if (input === 'EOF') {
      textEditor.saveToFile('meuarquivo.txt')
      rl.close()
    } else {
      textEditor.insertLine(textEditor.lines.length, input)
    }
  })
  