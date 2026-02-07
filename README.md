# GPS Academy Website Guide

## 🚀 How to Host on Your Domain (gpsacademyedu.in)

### Option 1: Drag & Drop (Simplest)
1.  Run `npm run build` on your computer.
2.  Drag the `dist` folder to Netlify.
3.  **Note:** To make changes later, you must edit code on your computer, rebuild, and re-upload.

### Option 2: GitHub (Best for Future Editing)
This method allows you to **edit your website online** via GitHub.com.

1.  **Create a Repository:** Go to [GitHub.com](https://github.com), sign up, and create a new repository.
2.  **Upload Code:** Upload all these project files to that repository.
3.  **Connect Netlify:**
    *   Log in to Netlify.
    *   Click "Add new site" > "Import from an existing project".
    *   Choose **GitHub**.
    *   Select your `gps-academy-website` repository.
    *   Netlify will auto-detect the settings (Build command: `npm run build`, Publish directory: `dist`).
    *   Click **Deploy Site**.

**✨ Magic Feature:** Now, whenever you edit a file on GitHub.com and save it, Netlify will automatically update your live website!

---

## 📢 How to Update the Notice Board

You have two ways to update the "Notice Board" section on the homepage.

### Method 1: Google Sheets (Easiest for Daily Updates)
This method allows you to update the website instantly by editing a spreadsheet, without touching the code.

#### 1. Create the Spreadsheet
Create a new Google Sheet with the following setup:
*   **Row 1 (Headers):**
    *   Column A: `Date`
    *   Column B: `Title`
    *   Column C: `IsNew`
*   **Row 2+ (Data):**
    *   Enter your notices.
    *   Set `IsNew` to `TRUE` if you want the flashing "NEW" tag, or leave it blank.

**Example:**
| Date | Title | IsNew |
| :--- | :--- | :--- |
| Feb 20, 2025 | Admissions Open for New Session | TRUE |
| Feb 18, 2025 | School Closed for Holiday | FALSE |

#### 2. Publish as CSV
1.  In your Google Sheet, click **File** > **Share** > **Publish to web**.
2.  In the dialog box, find the dropdown that says "Web page" and change it to **Comma-separated values (.csv)**.
3.  Click **Publish**.
4.  **Copy the link** generated.

#### 3. Connect to Website
1.  Open the file `constants.ts` in your project.
2.  Find the variable `NOTICE_SHEET_URL`.
3.  Paste your link inside the quotes.
    ```typescript
    export const NOTICE_SHEET_URL: string = "https://docs.google.com/...output=csv";
    ```
4.  Save the file. The website will now fetch notices from your sheet!

---

## 📄 How to Upload Resources (PDFs)

To add the **Brochure** or **Fee Structure** PDF to the Admissions page:

1.  **Upload the PDF** to your Google Drive.
2.  Right-click the file and select **Share**.
3.  Change access from "Restricted" to **"Anyone with the link"**.
4.  Click **Copy Link**.
5.  Open `constants.ts` in this project.
6.  Find the `DOCUMENTS` section:
    ```typescript
    export const DOCUMENTS = {
      brochure: "PASTE_YOUR_LINK_HERE", 
      feeStructure: "PASTE_YOUR_LINK_HERE",
    };
    ```
7.  Paste your link inside the quotes. The button will automatically appear on the website.

---

## 🛠️ Future Maintenance Guide

Here is a quick reference on how to change different parts of the website.

### 1. Changing School Details (Phone, Email, Address)
*   **File:** `constants.ts`
*   **What to do:** Edit the `SCHOOL_INFO` object. This is the central place for all contact info.

### 2. Changing Images
*   **File:** `constants.ts`
*   **What to do:** Update the links in the `IMAGES` object with new Google Drive links.

### 3. Adding/Removing Menu Links
*   **File:** `constants.ts`
*   **What to do:** Edit the `NAVIGATION_LINKS` array.

### 4. Changing Colors
*   **File:** `index.html`
*   **What to do:** Look for the `<script>` tag containing `tailwind.config` inside the `<head>` section.