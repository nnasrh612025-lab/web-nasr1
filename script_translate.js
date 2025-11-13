document.getElementById('translateBtn').addEventListener('click', () => {
    const text = document.getElementById('sourceText').value;
    const lang = document.getElementById('languageSelect').value;

    if (!text) {
        alert('من فضلك أدخل نص للترجمة!');
        return;
    }

    // رابط خارجي لجوجل ترجمة (فتح في نافذة جديدة)
    const url = `https://translate.google.com/?sl=auto&tl=${lang}&text=${encodeURIComponent(text)}&op=translate`;
    window.open(url, '_blank');

    document.getElementById('translatedText').innerText = 'تم إرسال النص لجوجل للترجمة. يمكنك نسخه من الصفحة الجديدة.';
});
