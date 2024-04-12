import re
import json

def names_and_urls_from_markdown(markdown_file):
    with open(markdown_file, 'r') as file:
        content = file.read()
    pattern = r'\[(.*?)\]\((.*?)\)'
    matches = re.findall(pattern, content)
    names_and_urls = [{'name': name, 'url': url} for name, url in matches]
    return names_and_urls

markdown_file = 'Readme.md'
names_and_urls = names_and_urls_from_markdown(markdown_file)

output_file = "all_urls.json"
with open(output_file, "w") as json_file:
    json.dump(names_and_urls, json_file, indent=4)

print("finished creating json file::::")
