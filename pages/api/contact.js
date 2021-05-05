import { MongoClient } from 'mongodb'
import dotenv from 'dotenv'

dotenv.config()

const contactHandler = async (req, res) => {
	if (req.method === 'POST') {
		const { email, name, message } = req.body.contactDetails
		if (
			!email ||
			!email.includes('@') ||
			!name ||
			name.trim() === '' ||
			!message ||
			message.trim() === ''
		) {
			res.status(422).json({ message: 'Invalid Input' })
			return
		}
		const newMessage = {
			email,
			name,
			message,
		}
		let client
		try {
			client = await MongoClient.connect(
				`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.4clyz.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
			)
		} catch (error) {
			res.status(500).json({ message: 'Could Not Connect To the Database' })
			return
		}
		const db = client.db()

		try {
			const result = await db
				.collection('blog-messages')
				.insertOne(newMessage)
			newMessage.id = result.insertedId
		} catch (error) {
			client.close()
			res.status(500).json({ message: 'Could Not insert Data To Database' })
			return
		}
		client.close()
		res.status(201).json({
			message: 'Successfully Received',
			message: newMessage,
		})
	}
}

export default contactHandler
