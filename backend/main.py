from fastapi import FastAPI
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
from gtts import gTTS
import io

app = FastAPI()

class Request(BaseModel):
    text: str

@app.post("/tts")
def tts(req: Request):
    fp = io.BytesIO()
    gTTS(text=req.text, lang="en").write_to_fp(fp)
    fp.seek(0)
    return StreamingResponse(fp, media_type="audio/mp3")
