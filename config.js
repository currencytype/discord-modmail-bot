/*
  Setting up the bot in a new server:
  - Update the IDs and bot token below.
*/

const config = {
	token: 'NjA5NzU5MzY4MzAwMzMxMDEw.XU7Yqg.b293rxJehYRH8wmj_JGC8UjU51g',
	guild: '660284360733491211', // Your server ID where you'll use it.
	log: '741409302899589181', // Log channel ID.
	modmail: '741409748523548733', // Modmail category ID. You can leave it blank if you don't want to move it to a specific catgeory.
	support: '738487927494934578', // Support Team role ID.
	maxThreads: 0, // The max amount of modmail threads in the guild. 0 would mean infinity.
	autoreply: false, // Auto replies to the user without invoking the reply-command. It's set to false (default) right now, you can set it to true if you want it.
};

module.exports = config;