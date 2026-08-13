
from google import genai

client = genai.Client()
MODEL = "gemini-3.5-flash"


def get_ai_recommendation(user):
    prompt = f"""
You are an AI career assistant.

User information:
Name: {user.name}
Skills: {user.skills}
Education: {user.education}
Interests: {user.interests}

Provide a career recommendation in this format:

Career paths:
Skills to learn:
Learning resources:
Roadmap:
"""

    response = client.models.generate_content(
        model=MODEL,
        contents=prompt
    )

    return response.text


def analyze_resume(resume_text):
    prompt = f"""
Analyze this resume and return:

1. ATS score out of 100
2. Missing skills
3. Resume improvements
4. Suitable career roles

Resume:
{resume_text}
"""

    response = client.models.generate_content(
        model=MODEL,
        contents=prompt
    )

    return response.text