export default async function handler(req, res) {
  try {
    const { message } = req.body;

    // 공통으로 사용하는 헤더 설정
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    };

    // GPT-3.5-turbo / GPT-4-turbo (대화 모델)
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        model: "gpt-3.5-turbo", // 또는 "gpt-4"
        messages: [{ role: "user", content: message }], // 대화 형식으로 메시지 전송
        max_tokens: 100,
      }),
    });

    /* 
    // GPT-3 (text-davinci-003, curie, babbage, ada) - prompt 기반 일반 텍스트 형식
    const response = await fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        model: "text-davinci-003", // 또는 "curie", "babbage", "ada"
        prompt: message, // 일반 텍스트로 메시지 전송
        max_tokens: 100,
      }),
    });
    */

    /*
    // Codex (code-davinci-002, code-cushman-001) - 코드 생성 모델
    const response = await fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        model: "code-davinci-002", // 또는 "code-cushman-001"
        prompt: message, // 코드 관련 메시지 전송
        max_tokens: 150, // 보통 코드 생성에는 더 많은 토큰이 필요
      }),
    });
    */

    /*
    // Embedding 모델 (text-embedding-ada-002) - 텍스트 임베딩
    const response = await fetch("https://api.openai.com/v1/embeddings", {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        model: "text-embedding-ada-002", // 임베딩 모델
        input: message, // 텍스트를 임베딩하기 위한 입력
      }),
    });
    */

    // 응답 확인 및 처리
    if (!response.ok) {
      throw new Error('Failed to fetch AI response');
    }

    const data = await response.json();

    // GPT-3.5-turbo / GPT-4-turbo 응답 처리
    const aiResponse = data.choices[0].message.content.trim();

    /*
    // GPT-3, Codex 응답 처리
    // const aiResponse = data.choices[0].text.trim();
    */

    /*
    // Embedding 모델 응답 처리
    // const embedding = data.data[0].embedding; // 임베딩 벡터 반환
    */

    res.status(200).json({ response: aiResponse });
    /*
    // 임베딩 모델 사용 시
    // res.status(200).json({ response: embedding });
    */
  } catch (error) {
    console.error('Error fetching AI response:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
