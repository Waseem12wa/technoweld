/* eslint-disable */
import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const GET = async (request: Request) => {
  const payload = await getPayload({
    config: configPromise,
  })

  try {
    // 1. Seed Site Settings
    const existingSettings = await payload.findGlobal({
      slug: 'site-settings',
    })
    
    await payload.updateGlobal({
      slug: 'site-settings',
      data: {
        siteName: 'Avion Steel Group Inc',
        tagline: 'Structural Steel Fabrication & Erection',
        seoDescription: 'Avion Steel Group Inc is a premiere structural steel fabrication service provider in Ontario offering a full range of structural & miscellaneous steel supply, fabrication and welding.',
      },
    })

    // 2. Seed Contact Info
    await payload.updateGlobal({
      slug: 'contact-info',
      data: {
        email: 'info@avionsteel.ca',
        address: 'Ontario, Canada',
      },
    })

    // 3. Seed Services
    const services = [
      {
        title: 'Design-Assist and Steel Coordination',
        slug: 'design-assist-and-steel-coordination',
        shortDescription: 'Collaborative engineering and detailing support to streamline steel packages.',
        icon: 'flaticon-tool',
      },
      {
        title: 'Structural Steel Fabrication',
        slug: 'structural-steel-fabrication',
        shortDescription: 'In-house manufacturing of primary steel frames, beams, and columns.',
        icon: 'flaticon-construction',
      },
      {
        title: 'Structural Steel Erection',
        slug: 'structural-steel-erection',
        shortDescription: 'On-site assembly and installation of structural steel frameworks.',
        icon: 'flaticon-crane',
      },
      {
        title: 'Miscellaneous Metals',
        slug: 'miscellaneous-metals',
        shortDescription: 'Custom fabrication of stairs, railings, grating, and specialty metal items.',
        icon: 'flaticon-stairs',
      },
      {
        title: 'Pre-Engineered Metal Buildings',
        slug: 'pre-engineered-metal-buildings',
        shortDescription: 'Supply and erection of versatile, fast-assembly PEMB systems.',
        icon: 'flaticon-factory',
      },
      {
        title: 'Repairs, Retrofit and Reinforcement',
        slug: 'repairs-retrofit-and-reinforcement',
        shortDescription: 'Modifications and strengthening of existing steel structures.',
        icon: 'flaticon-wrench',
      }
    ]

    for (const service of services) {
      const existing = await payload.find({
        collection: 'services',
        where: { slug: { equals: service.slug } },
      })
      if (existing.totalDocs === 0) {
        await payload.create({
          collection: 'services',
          data: service,
        })
      }
    }

    // 4. Seed Projects
    const projects = [
      {
        title: 'Commercial Steel Complex',
        slug: 'commercial-steel-complex',
        category: 'commercial',
        location: 'Toronto, ON',
        client: 'Avion Construction Group',
      },
      {
        title: 'Industrial Manufacturing Plant',
        slug: 'industrial-manufacturing-plant',
        category: 'industrial',
        location: 'Mississauga, ON',
      },
      {
        title: 'Retail Store Structural Retrofit',
        slug: 'retail-store-structural-retrofit',
        category: 'commercial',
        location: 'Vaughan, ON',
      }
    ]

    for (const project of projects) {
      const existing = await payload.find({
        collection: 'projects',
        where: { slug: { equals: project.slug } },
      })
      if (existing.totalDocs === 0) {
        await payload.create({
          collection: 'projects',
          // @ts-ignore - Ignoring image relation for seed simplicity
          data: project,
        })
      }
    }

    return Response.json({
      success: true,
      message: 'Avion Steel seed data injected successfully.',
    })
  } catch (error: any) {
    console.error('Seed Script Error:', error)
    return Response.json({
      success: false,
      error: error.message,
    }, { status: 500 })
  }
}
