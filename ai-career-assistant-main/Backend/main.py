from fastapi import FastAPI
from models import User
from career_engine import get_career
from ai_engine import get_ai_recommendation
from fastapi import UploadFile,File
from resume_engine import extract_text
from ai_engine import analyze_resume
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/career")
def career(user: User):
   careers=get_career(user.skills)
   result=get_ai_recommendation(user)
   return{"user":user.name,
          "recommendation":result}

@app.post("/resume-analysis")
async def resume_analysis(file:UploadFile=File(...)):
   contents = await file.read()
   file_path = f"uploads/{file.filename}"
   with open(file_path,"wb") as f:
      f.write(contents)
   text = extract_text(file_path)
   analysis = analyze_resume(text)
      
   return{"filename": file.filename,
          "analysis": analysis
      }