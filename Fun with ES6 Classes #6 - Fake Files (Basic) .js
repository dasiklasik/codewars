/*link https://www.codewars.com/kata/5784c8116211383b5f0001d3/solutions/javascript*/

class File {
  constructor(fullName, contents) {
    this._fullName = fullName
    this._contents = contents
    this._lineNumber = 0
    this._letterNumber = 0
  }

  get fullName() {
    return this._fullName
  }

  get filename() {
    const index = this._fullName.lastIndexOf('.')
    return this._fullName.slice(0, index)
  }

  get extension() {
    const index = this._fullName.lastIndexOf('.')
    return this._fullName.slice(index+1)
  }

  getContents() {
    return this._contents
  }

  write(str) {
    if(this._contents) {
      this._contents += '\n'+str
    } else {
      this._contents = str
    }
  }

  gets() {
    const res = this._contents.split('\n')[this._lineNumber]
    this._lineNumber += 1
    return res
  }

  getc() {
    const res = this._contents[this._letterNumber]
    this._letterNumber += 1
    return res
  }
}