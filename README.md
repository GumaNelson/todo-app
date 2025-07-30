  Flutter To-Do App with React Admin Panel

A complete to-do application built with Flutter for mobile users and React for admin management, powered by Firebase.

   🚀 Features

    Flutter Mobile App
-     User Authentication     - Sign up/Login with email and password
-     Personal Task Management     - Create, edit, and delete tasks
-     Real-time Updates     - Tasks sync instantly across devices
-     Task Status Tracking     - Mark tasks as complete/incomplete
-     User-specific Data     - Each user sees only their own tasks

    React Admin Panel
-     Admin Dashboard     - View all tasks from all users
-     Task Management     - Delete and modify task status
-     User Analytics     - See which users are creating tasks
-     Real-time Monitoring     - Live updates from Firebase
-     Responsive Design     - Works on desktop and mobile browsers

   🛠️ Tech Stack

-     Frontend (Mobile)    : Flutter, Dart
-     Frontend (Admin)    : React, JavaScript
-     Backend    : Firebase (Firestore, Authentication)
-     Hosting    : Vercel (Admin Panel)

   📁 Project Structure

   
├── flutter-todo/                Flutter mobile application
│   ├── lib/
│   │   └── main.dart           Main Flutter application code
│   ├── pubspec.yaml            Flutter dependencies
│   └── android/ios/            Platform-specific files
│
├── admin-panel/                React admin dashboard
│   ├── src/
│   │   ├── App.js             Main React component
│   │   ├── firebaseConfig.js   Firebase configuration
│   │   └── index.js           React entry point
│   ├── package.json           Node dependencies
│   └── public/                Static files
│
└── README.md                  This file
   

   🔧 Setup Instructions

    Prerequisites
- Flutter SDK installed
- Node.js and npm installed
- Firebase project set up

    Flutter App Setup
1. Navigate to the flutter-todo directory:
      
   cd flutter-todo
      
2. Install dependencies:
      
   flutter pub get
      
3. Configure Firebase for Flutter (follow Firebase Flutter setup guide)
4. Run the app:
      
   flutter run
      

    React Admin Panel Setup
1. Navigate to the admin-panel directory:
      
   cd admin-panel
      
2. Install dependencies:
      
   npm install
      
3. Update `src/firebaseConfig.js` with your Firebase configuration
4. Start the development server:
      
   npm start
      
5. For production build:
      
   npm run build
      

   🔐 Firebase Configuration

The app uses Firebase for:
-     Authentication    : Email/password user authentication
-     Firestore Database    : Real-time task storage and synchronization
-     Security Rules    : User-based data access control

    Firestore Structure
   
tasks/
  ├── {taskId}/
      ├── text: "Task description"
      ├── done: boolean
      ├── uid: "user-id"
      └── created: timestamp
   

   🌐 Live Demo

-     Admin Panel    https://todo-app-admin-panel.vercel.app/
-     Flutter App    : Build and install on Android device

   📱 How to Use

    For End Users (Flutter App)
1. Download and install the Flutter app
2. Create an account or sign in
3. Add new tasks using the text input
4. Tap checkboxes to mark tasks complete
5. Swipe or tap delete to remove tasks

    For Administrators (React Panel)
1. Visit the admin panel URL
2. View all user tasks in real-time
3. Monitor user activity and task creation
4. Delete inappropriate or test tasks
5. Track application usage statistics

   🔒 Security Features

-     User Authentication    : Secure email/password authentication
-     Data Isolation    : Users can only access their own tasks in the mobile app
-     Admin Oversight    : Admin panel can view all tasks for moderation
-     Firebase Security Rules    : Server-side data protection

   🚀 Deployment

    Flutter App
- Build APK: `flutter build apk`
- Build for iOS: `flutter build ios`

    Admin Panel
- Deployed automatically to Vercel on git push
- Live at: https://todo-app-admin-panel.vercel.app/

   📋 Development Submission

This project was created as part of a technical assessment for Industry 4.0+ Bureau, STI-OP – Office of the President.

    Submission Date    : July 30, 2025  
    Developer    : GUMA NDUHURA NELSON  
    Requirements Met    :
- ✅ Flutter mobile application
- ✅ React admin panel
- ✅ Firebase integration (auth + database)
- ✅ Public GitHub repository

   📞 Contact - 0775306245

For questions or support, please contact gumanelson1@gmailcom .

---

  Built with ❤️ using Flutter and React  