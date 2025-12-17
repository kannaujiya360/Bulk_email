// src/services/file.service.ts
import XLSX from 'xlsx'
import fs from 'fs'

export function parseExcel(filePath: string) {
  const workbook = XLSX.readFile(filePath)
  const sheetName = workbook.SheetNames[0]
  const sheet = workbook.Sheets[sheetName]
  return XLSX.utils.sheet_to_json(sheet)
}

export function readHTML(filePath: string) {
  return fs.readFileSync(filePath, 'utf-8')
}
