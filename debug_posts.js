import mongoose from "mongoose";
import Post from "./models/post.js";
import { user as User } from "./models/user.model.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

const cleanAndVerify = async () => {
    await connectDB();
    
    // Delete posts without user
    const result = await Post.deleteMany({ user: { $exists: false } });
    console.log(`Deleted ${result.deletedCount} bad posts.`);

    // Find existing users
    const users = await User.find();
    if(users.length > 0) {
        console.log("Found user:", users[0]._id);
        
        // Create a test post
        const newPost = new Post({
            title: "Auto Test Post",
            content: "Content",
            user: users[0]._id
        });
        await newPost.save();
        console.log("Created test post.");
        
        // Fetch and populate
        const fetched = await Post.findById(newPost._id).populate("user", "name");
        console.log("Fetched post user:", fetched.user);
    } else {
        console.log("No users found to create a post with.");
    }
    
    process.exit();
};

cleanAndVerify();
