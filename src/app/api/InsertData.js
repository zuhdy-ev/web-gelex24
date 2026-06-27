// pages/api/insertData.js
import { GoogleSpreadsheet } from 'google-spreadsheet'

export default async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const data = req.body

  try {
    // Add your Google Sheets credentials
    const doc = new GoogleSpreadsheet(
      'https://docs.google.com/spreadsheets/d/1aIjg4TTfhS2zVgrtg2tZEoF8rtOwOq9wgl8FU0BZMqU/edit',
    )
    await doc.useServiceAccountAuth({
      client_email: 'gelex-2024@abiding-ion-432720-a4.iam.gserviceaccount.com',
      private_key:
        '-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCbUTcmI+d9RcYT\ns0bPud78wpGPDmmYfrRSYI1U2um2ZWspswASTEWlGrs3QacFCHSP2IDBr9gZwIqG\nQF4JdrBH075Xl7TRB9yG7yyHMmm8ju+4d0Zk074+NxJ5TeQxwTtmI1pGltg7OnYI\nKZ6fp/5Pi0HtGbXI1BWq87rpOWKqyEZTDKlGL89I66oJS29n3fSxvpGU9znV1XLH\n5M44ty/MOb9QD1YPgBW6PqX0MAnfCtV0lwgKRua0KuRbWn8eKF0OZ7X0ZgPcniqQ\nCS5ctKJdZLkqFl5De2AkY63TfXXRnvMF/UvVTGLqMpTG6bRuE3qMA/sKu9h4fltQ\nKgUgU6xNAgMBAAECggEAELenJfXLXtJ5xXkQcB9jfvU6UZmNiBprMkquK6n8aeN0\nq2JW6aFIBcNgz0vDvGjykuEMyswwiGUPA/A9rusVgkWqQSdVEQK1m9h2hH7Knr8L\n0mEUNJoN6ghndqMJoslXqWC4wMxPreBW//3q0uh0GP+2Mt0Hkfwx8NqXDa9djWAi\nNGXn6yF1yTWCARSzOkZ3asjHUMMRqSP9Kiij2mFxfV9IL0CagLaiJPNBkX0TNA5N\nXAv5SnkieKT1oUPf7gvIj+zdBBpTSghV6mfcQXUErfBnmlbaj8XwU6xYtCzwylu+\n7gqITaJ9kMcrAoc1NUPFc40CCwm2bgGyYN9uatqzQQKBgQDI5ofiquswwUMeI9LE\nMHzmrqw1BLLA0EaZ+DR02Phr8QIBR7dEvcNFsUrGuMw44j9K9JPPcEz80TQVoMHM\n5PY7IJUwZLhgiA/eONUkE4SafeCclc01ilN75oAYQf2STyFTiXWo9xjVTc7cnlEp\nspeCJC3st50YiTI/LH8mk+gjNQKBgQDF6jpwfEw1Cun45QKjRPaWNGvHtm6gyiAT\nBHa3xHF4DNYiZTi4gKhQKLFwlq0HBU4jkJXva/F1sHePSIOakHNvYrOjyxM0HskX\nnle6G0TbauiVQfXNGdFxERS1jvjZcjZx6X8PFUNVKv0FsCxB/LNl0AxvcGFBSaiR\nDLz33p2vuQKBgQCguL0RO4e4k4RsgmBFkDz8F9Ww/Lc8xeMVnpnouQPU5xShjYwy\ntFWaVcHqxUCsaWQVRSFTHRaaU4uFmfwxPSM4HlL8SjevEmsPbwwlNnApYHbnDnkD\nUkyDnN3xiimgeSnCOQAmUrhNPVg263knELdg6CzNaf+F94x5OdHnPQDD2QKBgQCQ\nqLl6Sn/xLT8C+3DIIboS49H7sa5+u/5hqBuWCnHdi5Rgo5en0/IyVOwNHTTvMsOA\nX0gYLc/Zc9iP1DLNINQfEAe5qs8og2/8YXJBx3i24BeMMSAWf86EVDXM1umxFjgR\nXtfOEH6cm8VBCRnwSWJfAoh0U7HiZJJfIu5kRkT/kQKBgQCEosw+Ogt9JOz0B2No\nVTBsoWIbM4P5xW9Utbeore2ZxJ7ljvZFr8EgVSwfgL4zJyRHRag8fpRBMs+AcZON\nhpZebH5aB1ggmDj4fbxG+kkDE4vUXvZH5QW7+BtfCC9jnBNWs2IH4sixdfNbxP63\n3FJVvYDcKeS00EfZsH2oz04mpQ==\n-----END PRIVATE KEY-----\n',
    })

    await doc.loadInfo() // loads document properties and worksheets
    const sheet = doc.sheetsByIndex[0] // assuming you want to work with the first sheet

    // Insert data into the sheet
    await sheet.addRow(data)

    res.json({ success: true })
  } catch (error) {
    console.error('Error inserting data:', error)
    res.status(500).json({ success: false, error: 'Internal Server Error' })
  }
}
