import React, { useState } from 'react'
import Head from 'next/head'
import { Trash2 } from 'lucide-react'
import { ValueOrientationMatrix, type Person } from '../components/ValueOrientationMatrix'

export default function Home() {
  const [people, setPeople] = useState<Person[]>([])

  const addPerson = () => {
    const newPerson: Person = {
      id: Date.now().toString(),
      displayName: "",
      structuralLogic: 0,
      commitment: 0,
      person: 0,
      resultRationality: 0,
    }
    setPeople([...people, newPerson])
  }

  const updatePerson = (id: string, field: keyof Person, value: string | number) => {
    setPeople(people.map((p) => (p.id === id ? { ...p, [field]: value } : p)))
  }

  const deletePerson = (id: string) => {
    setPeople(people.filter((p) => p.id !== id))
  }

  const isPersonComplete = (person: Person): boolean => {
    return (
      person.displayName.trim() !== "" &&
      person.structuralLogic >= 0 &&
      person.structuralLogic <= 50 &&
      person.commitment >= 0 &&
      person.commitment <= 50 &&
      person.person >= 0 &&
      person.person <= 50 &&
      person.resultRationality >= 0 &&
      person.resultRationality <= 50
    )
  }

  const completePeople = people.filter(isPersonComplete)

  return (
    <>
      <Head>
        <title>価値志向モデル（Value Orientation Model）</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <main className="min-h-screen py-20 lg:py-22 px-8 lg:px-15 bg-tertiary">
        <div className="max-w-container mx-auto">
          {/* Page Header */}
          <div className="mb-20 lg:mb-35">
            <h1 className="text-section-mobile lg:text-section text-dark mb-4">
              価値志向モデル
            </h1>
            <p className="text-body text-gray-paragraph">
              自分がどのような判断の引き受け方・関係の持ち方をすると心地良いかを可視化し、選択的にそうしている自分を把握することを目的とした志向プロファイルです。
            </p>
          </div>

          {/* Matrix Display Section */}
          <section className="mb-20 lg:mb-35">
            <div className="max-w-[500px] mx-auto mb-12">
              <ValueOrientationMatrix people={completePeople} />
            </div>

            {/* Input Table */}
            <div className="bg-white rounded-ldsg-400 border border-gray-border p-8">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-h3 text-dark">データ入力</h3>
                <button 
                  onClick={addPerson}
                  className="bg-primary text-white px-6 py-2 rounded-ldsg-200 font-bold hover:opacity-80 transition-opacity"
                >
                  人物を追加
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-border">
                      <th className="py-4 px-2 text-label text-gray-paragraph">表示名</th>
                      <th className="py-4 px-2 text-label text-gray-paragraph">構造論理</th>
                      <th className="py-4 px-2 text-label text-gray-paragraph">コミットメント</th>
                      <th className="py-4 px-2 text-label text-gray-paragraph">人物</th>
                      <th className="py-4 px-2 text-label text-gray-paragraph">結果合理性</th>
                      <th className="py-4 px-2 text-label text-gray-paragraph text-center">操作</th>
                    </tr>
                  </thead>
                  <tbody>
                    {people.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="py-12 text-center text-body text-gray-placeholder">
                          「人物を追加」ボタンをクリックしてデータを入力してください
                        </td>
                      </tr>
                    ) : (
                      people.map((person) => (
                        <tr key={person.id} className="border-b border-gray-border">
                          <td className="py-4 px-2">
                            <input
                              type="text"
                              value={person.displayName}
                              onChange={(e) => updatePerson(person.id, "displayName", e.target.value)}
                              placeholder="名前を入力"
                              className="w-full border border-gray-border rounded-ldsg-100 px-3 py-2 text-body focus:outline-none focus:border-primary"
                            />
                          </td>
                          <td className="py-4 px-2">
                            <div className="flex items-center gap-3">
                              <input
                                type="range"
                                min="0"
                                max="50"
                                step="1"
                                value={person.structuralLogic}
                                onChange={(e) => updatePerson(person.id, "structuralLogic", parseInt(e.target.value))}
                                className="w-full accent-primary"
                              />
                              <span className="text-label text-gray-paragraph min-w-[20px]">{person.structuralLogic}</span>
                            </div>
                          </td>
                          <td className="py-4 px-2">
                            <div className="flex items-center gap-3">
                              <input
                                type="range"
                                min="0"
                                max="50"
                                step="1"
                                value={person.commitment}
                                onChange={(e) => updatePerson(person.id, "commitment", parseInt(e.target.value))}
                                className="w-full accent-primary"
                              />
                              <span className="text-label text-gray-paragraph min-w-[20px]">{person.commitment}</span>
                            </div>
                          </td>
                          <td className="py-4 px-2">
                            <div className="flex items-center gap-3">
                              <input
                                type="range"
                                min="0"
                                max="50"
                                step="1"
                                value={person.person}
                                onChange={(e) => updatePerson(person.id, "person", parseInt(e.target.value))}
                                className="w-full accent-primary"
                              />
                              <span className="text-label text-gray-paragraph min-w-[20px]">{person.person}</span>
                            </div>
                          </td>
                          <td className="py-4 px-2">
                            <div className="flex items-center gap-3">
                              <input
                                type="range"
                                min="0"
                                max="50"
                                step="1"
                                value={person.resultRationality}
                                onChange={(e) => updatePerson(person.id, "resultRationality", parseInt(e.target.value))}
                                className="w-full accent-primary"
                              />
                              <span className="text-label text-gray-paragraph min-w-[20px]">{person.resultRationality}</span>
                            </div>
                          </td>
                          <td className="py-4 px-2 text-center">
                            <button
                              onClick={() => deletePerson(person.id)}
                              className="text-gray-placeholder hover:text-error transition-colors"
                              aria-label="削除"
                            >
                              <Trash2 size={20} />
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
