import mongoose, { Document, Schema } from 'mongoose';

interface ITweet extends Document {
    text: string;
    username: string;
    userId: string;
    date: string;
}

const tweetSchema: Schema = new Schema({
    text: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    }
});

const Tweet = mongoose.model<ITweet>('Tweet', tweetSchema)

export { ITweet, Tweet };