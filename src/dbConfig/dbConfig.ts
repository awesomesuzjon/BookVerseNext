import mongoose from 'mongoose';

export function connect() {
    try {
        // Connect to MongoDB using the provided URI


        console.log(process.env.MONGO_URI, 'process.env.MONGO_URI')
        mongoose.connect(process.env.MONGO_URI!);


        const connection = mongoose.connection;

        // Listen for successful connection
        connection.once('open', () => {
            console.log('Database connected successfully');
        });

        // Listen for connection errors
        connection.on('error', (error) => {
            console.error('Error in connecting to database:', error);
            process.exit(1); // Exit the process with a failure code
        });
    } catch (error) {
        console.error('Something went wrong:', error);
        process.exit(1); // Exit the process with a failure code
    }
}
