"""Sinh phong-thi/pet/topics.json từ các file phong-thi/pet/tests/*.json (chạy lại sau khi sửa dữ liệu)."""
import json, os
ROOT = os.path.join(os.path.dirname(__file__), "..", "phong-thi", "pet")
ORDER = ["work", "leisure", "house", "travel", "food", "health", "weather", "environment"]
out = []
for tid in ORDER:
    d = json.load(open(os.path.join(ROOT, "tests", tid + ".json"), encoding="utf-8"))
    secs = d["sections"]
    for s in secs:
        if s["kind"] == "match": assert len(s["people"]) == len(s["answers"]), (tid, s["id"])
        if s["kind"] == "cloze": assert len(s["opts"]) == len(s["answers"]), (tid, s["id"])
        if s["kind"] in ("gaptext", "cloze", "open"):
            import re
            g = [int(x) for x in re.findall(r"\{(\d+)\}", s["passage"]["text"])]
            assert len(g) == len(s["answers"]) and g == list(range(min(g), min(g) + len(g))), (tid, s["id"], g)
        if s["kind"] == "mcq":
            for q in s["qs"]: assert 0 <= q["a"] < len(q["o"]), (tid, s["id"], q)
        if "exp" in s and s["kind"] not in ("mcq", "short"): assert len(s["exp"]) == len(s["answers"]), (tid, s["id"])
    out.append({"id": tid, "title": d["title"], "vi": d["vi"], "icon": d["icon"], "n": len(secs),
                "graded": [s["id"] for s in secs if s["kind"] != "speak"]})
json.dump(out, open(os.path.join(ROOT, "topics.json"), "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print(len(out), "topics,", sum(t["n"] for t in out), "sections,", sum(len(t["graded"]) for t in out), "graded")
