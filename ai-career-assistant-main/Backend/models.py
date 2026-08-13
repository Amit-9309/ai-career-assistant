from pydantic import BaseModel
class User(BaseModel):
    name: str
    skills:list[str]
    education:str
    interests:list[str]
