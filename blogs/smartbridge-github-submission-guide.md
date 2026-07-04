---
title: "SmartBridge Internship Submission Guide: Navigating the 8-Phase GitHub Template"
date: "2026-06-29"
excerpt: "A project-neutral step-by-step guide for university interns to organize their local files, compile the required PDF documentation, and configure their GitHub repository to meet evaluation standards."
author: "Rayan Syed"
kicker: "SUBMISSION_GUIDE"
readTime: "12 min read"
---

# Navigating the Internship GitHub Submission Structure

When you work on an engineering or machine learning project during your internship, your primary focus is usually on writing clean code and running your application locally.

However, when it comes to final evaluations, internship portals (like SmartBridge/SkillWallet) grade your project based on the **Software Development Life Cycle (SDLC)**. Evaluators require your GitHub repository to be organized into a standard **8-Phase Folder Layout**. 

If you do not structure your files correctly, or if you mix code and documentation together, your evaluators may struggle to run your code, and you may lose grading points. This guide explains how to organize your workspace, what each PDF deliverable must contain, and how to push your structure to GitHub successfully.

---

## 1. Proposed Template Layout vs. Our Isolated Code Approach
When you review the internship guidelines, the platform proposes putting all your files—including your runnable code—directly inside the 8 folders (specifically placing your project codebase inside `5. Project Development Phase/`).

### Why the Proposed Layout is Problematic:
- **Local Run Complexity:** Forcing code files inside a nested subfolder shifts your file paths, meaning you have to type long directory commands (like `cd \"5. Project Development Phase\"`) in your terminal to train or run servers.
- **Hosting Server Blocks:** Standard cloud hosting platforms check the **root level** of your GitHub repository for deployment configurations. If your code is hidden inside a phase subfolder, your deployments will fail.

### Why We Choose Our Approach:
To solve this, we isolate the codebase from the documentation deliverables:
- **Active Code at the Root:** We place all active files (data files, model weights, templates, and server scripts) directly in the root directory.
- **Documentation Isolation:** We create a single folder at the root level called `project-documentation/` containing the 8 required subfolders to hold your PDF deliverables.

---

## 2. Recommended Repository Directory Blueprint
Here is how your local folder and GitHub repository should look:

```text
[your-project-folder]/
│
├── data/                             <-- Raw dataset files
├── models/                           <-- Serialized model weights / scaler parameters
├── templates/                        <-- Frontend layouts
├── static/                           <-- CSS stylesheets and JavaScript scripts
├── notebook.ipynb                    <-- Exploratory data notebook
├── train.py                          <-- Model training script
├── app.py                            <-- Web server script
├── requirements.txt                  <-- Package dependencies list
│
└── project-documentation/            <-- Documentations folder
    ├── 1. Brainstorming & Ideation/
    │   └── ideation_report.pdf
    ├── 2. Requirement Analysis/
    │   └── requirements_specification.pdf
    ├── 3. Project Design Phase/
    │   └── design_document.pdf
    ├── 4. Project Planning Phase/
    │   └── planning_sheet.pdf
    ├── 5. Project Development Phase/
    │   └── development_phase_report.pdf
    ├── 6. Project Testing/
    │   └── test_report.pdf
    ├── 7. Project Documentation/
    │   └── user_manual.pdf
    └── 8. Project Demonstration/
        └── demo_screenshots.pdf
```

---

# How to Create this Structure Locally

Before uploading your work to GitHub, you must arrange these folders on your local computer.

## 3. Creating the Directories on Your System
The simplest way to build this structure is directly inside **VS Code** (so you don't have to keep switching back and forth between VS Code and your system's file manager):

1. **Open your project folder in VS Code:** Open VS Code, select **File -> Open Folder...**, choose your main project codebase directory (e.g. `opticrop`), and click Open.
2. **Create the parent documentation folder:** Hover your cursor over the name of your project in the left sidebar explorer, click the **New Folder** icon, and name it exactly `project-documentation`.
3. **Create the 8 subfolders inside the parent folder:** Right-click the newly created `project-documentation` folder in the sidebar, select **New Folder**, and name the subfolder. Repeat this step to create all 8 folders:
   - `1. Brainstorming & Ideation`
   - `2. Requirement Analysis`
   - `3. Project Design Phase`
   - `4. Project Planning Phase`
   - `5. Project Development Phase`
   - `6. Project Testing`
   - `7. Project Documentation`
   - `8. Project Demonstration`

---

# Compiling Your PDF Deliverables (Phase by Phase)

For each phase, you must write a report using word processing software (like Microsoft Word or Google Docs) and export it as a **PDF** inside its corresponding subfolder. Here is a project-neutral breakdown of what each document must contain:

## 4. Phase 1: Brainstorming & Ideation
Save your file as `ideation_report.pdf` inside the `1. Brainstorming & Ideation/` folder. It must cover:
- **Project Title:** A clear name for your application.
- **Problem Statement:** Explain the real-world problem you are addressing and why traditional methods fail.
- **Proposed Solution:** Describe how your software resolves this issue using machine learning or data-driven insights.
- **Target Audience:** Who will benefit from using this application (e.g., end-users, industry professionals).
- **Technology Stack:** List the programming languages, libraries, and frameworks you plan to use.

---

## 5. Phase 2: Requirement Analysis
Save your file as `requirements_specification.pdf` inside the `2. Requirement Analysis/` folder. It must cover:
- **Software Dependencies:** List the operating systems, runtimes (e.g. Python version), and external packages required to run the code.
- **Hardware Configurations:** Specify the minimum RAM, storage space, and processor type needed for both model training and hosting.
- **Data Specifications:** Describe the structure of the dataset (number of rows, columns, feature names, and datatypes).

---

## 6. Phase 3: Project Design Phase
Save your file as `design_document.pdf` inside the `3. Project Design Phase/` folder. It must cover:
- **System Architecture Flow:** A block diagram showing how data moves from user input, through your backend API, to the machine learning model, and back to the user interface.
- **Data Flow Logic:** Explain the preprocessing steps (e.g., standardizing input features).
- **User Interface Mockups:** Paste screenshots or basic wireframes showing how your form and result pages are laid out.

---

## 7. Phase 4: Project Planning Phase
Save your file as `planning_sheet.pdf` inside the `4. Project Planning Phase/` folder. It must cover:
- **Project Roadmap:** A timeline (or table) showing the dates and task allocations for each milestone:
  - Week 1: Environment configuration and data ingestion.
  - Week 2: Exploratory analysis and model building.
  - Week 3: Backend API routing and web interface development.
  - Week 4: Integration testing, validation, and submission.

---

## 8. Phase 5: Project Development Phase
Because your runnable code files live at the root of the project, you do not want to duplicate them here. Instead, save a short report named `development_phase_report.pdf` inside the `5. Project Development Phase/` folder stating:
- **Location of Source Code:** Explain that for compilation and execution safety, the code is placed directly in the repository's root directory.
- **Source Code Overview:** Provide a brief summary of what your scripts do (e.g., which script trains the model, and which script starts the web server).
- **Dataset Path:** Point to the file path where the dataset is stored.

---

## 9. Phase 6: Project Testing
Save your file as `test_report.pdf` inside the `6. Project Testing/` folder. It must cover:
- **Model Evaluation:** Report your model training metrics (e.g., classification accuracy, precision, and recall scores).
- **System Verification Cases:** A table listing the inputs you entered during testing, the expected outcome, the actual system output, and whether the test passed or failed. Include tests for invalid inputs (boundary testing).

---

## 10. Phase 7: Project Documentation
Save your file as `user_manual.pdf` inside the `7. Project Documentation/` folder. It must cover:
- **Setup & Installation:** Step-by-step commands to install required packages.
- **Running the App:** Commands to execute the model training and start the local server.
- **User Guidelines:** Explain how to enter inputs on the screen and what the system outputs represent.

---

## 11. Phase 8: Project Demonstration
Save your file as `demo_screenshots.pdf` inside the `8. Project Demonstration/` folder. It must cover:
- **Terminal Execution:** Screenshots showing successful model training and the active web server.
- **Web Interface:** Screenshots of the web page loading and displaying output results.
- **Demo Video Link:** (Optional) Host a short screen recording on a sharing platform (like Google Drive or YouTube) showing the application in use, and paste the access link in the PDF.

---

# Connecting & Pushing Your Code to GitHub

Once your folders are structured and your PDFs are exported, you are ready to upload everything to GitHub.

## 12. Pushing the Repository Structure
Open your terminal inside the root directory of your project (where your code files and the `project-documentation` folder are stored) and run these commands:

1. **Initialize Git locally**:
   ```bash
   git init
   ```
2. **Create a `.gitignore` file**:
   To avoid uploading bulky model weights or temporary cache folders, create a file named `.gitignore` in your root folder and add:
   ```text
   **/__pycache__/
   **/.ipynb_checkpoints/
   models/crop_model.joblib
   models/scaler.joblib
   models/card_model.joblib
   ```
3. **Stage your files**:
   ```bash
   git add .
   ```
4. **Create a commit**:
   ```bash
   git commit -m "feat: setup project workspace and documentation folders"
   ```
5. **Set branch to main**:
   ```bash
   git branch -M main
   ```
6. **Link to your remote GitHub repository**:
   Replace the URL below with your actual GitHub repository URL:
   ```bash
   git remote add origin https://github.com/yourusername/your-repository-name.git
   ```
7. **Push your code**:
   ```bash
   git push -u origin main
   ```

After pushing, go to your GitHub repository in your browser. You will see your runnable codebase at the root level, alongside your `project-documentation` folder containing all 8 phases of SDLC PDFs, ready for evaluation!

---

## Next Steps: Practical Project Handbooks

Now that you know how to structure your repository and submit deliverables, it's time to build your project! Follow our step-by-step handbooks to build complete, production-ready applications from scratch:

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
  <a href="/blog/credit-card-approval-prediction" class="block p-6 border border-neutral-800/80 rounded-2xl bg-neutral-950/40 hover:border-neutral-700/60 transition-all duration-300 relative overflow-hidden group no-underline">
    <div class="text-white font-bold text-lg mb-2 group-hover:text-signature transition-colors duration-300">Credit Card Approval Prediction Guide</div>
    <p class="text-neutral-400 text-sm leading-relaxed mb-4">Learn how to build an end-to-end classification system, run exploratory data analysis in Jupyter, compare model metrics, and build a Flask API.</p>
    <div class="flex items-center gap-1.5 text-xs font-mono text-neutral-300 group-hover:text-white mt-auto pt-4 border-t border-neutral-900/60">
      <span>READ_HANDBOOK</span>
      <svg class="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </div>
  </a>
  <a href="/blog/opti-crop-agricultural-recommendation-system" class="block p-6 border border-neutral-800/80 rounded-2xl bg-neutral-950/40 hover:border-neutral-700/60 transition-all duration-300 relative overflow-hidden group no-underline">
    <div class="text-white font-bold text-lg mb-2 group-hover:text-signature transition-colors duration-300">OptiCrop Recommendation Engine</div>
    <p class="text-neutral-400 text-sm leading-relaxed mb-4">Build a data-driven recommendation system to identify optimal crops using soil chemical compositions and weather conditions, complete with a dark dashboard Single Page Application (SPA).</p>
    <div class="flex items-center gap-1.5 text-xs font-mono text-neutral-300 group-hover:text-white mt-auto pt-4 border-t border-neutral-900/60">
      <span>READ_HANDBOOK</span>
      <svg class="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </div>
  </a>
</div>
