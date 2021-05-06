import { MongoClient } from 'mongodb'
// import dotenv from 'dotenv'

// dotenv.config()

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
		const connectionString = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER}.4clyz.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
		// const connectionString =
		// 	'mongodb+srv://mongodb:mongodb123@cluster0.4clyz.mongodb.net/blog-clone-app?retryWrites=true&w=majority'

		try {
			client = await MongoClient.connect(connectionString, {
				useUnifiedTopology: true,
			})
			console.log(' Databse successfully connected')
		} catch (error) {
			console.log(error, 'Could not Connect To The Database')
			res.status(500).json({
				message: 'Could Not Connect To the Database',
			})
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
